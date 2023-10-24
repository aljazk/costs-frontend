import { expect } from 'chai';
import { Router } from '../../src/global/router.js';

describe('Router', () => {
  let appendToMock;
  let removeAllChildNodesCalls;

  beforeEach(() => {
    removeAllChildNodesCalls = 0;
    appendToMock = {
      removeAllChildNodes: () => {
        removeAllChildNodesCalls++;
      },
    };
  });

  it('should route to exact path', () => {
    let numberOfCalls = 0;
    const router = new Router([
      {
        path: 'test',
        activate: (appendTo, path) => {
          numberOfCalls++;
        },
      },
    ]);

    router.activate(appendToMock, 'test');
    expect(numberOfCalls).equal(1);
  });

  it('sould route to empty path', () => {
    let numberOfCalls = 0;
    const router = new Router([
      {
        path: '',
        activate: (appendTo, path) => {
          numberOfCalls++;
        },
      },
    ]);

    router.activate(appendToMock, '');
    expect(numberOfCalls).equal(1);
  });

  it('sould route if path start with string', () => {
    let numberOfCalls = 0;
    const router = new Router([
      {
        path: 'test',
        activate: (appendTo, path) => {
          numberOfCalls++;
        },
      },
    ]);

    router.activate(appendToMock, 'test/test1');
    expect(numberOfCalls).equal(1);
  });

  it('should cut path prefix for child', () => {
    let pathForChild = undefined;
    const router = new Router([
      {
        path: 'test',
        activate: (appendTo, path) => {
          pathForChild = path;
        },
      },
    ]);

    router.activate(appendToMock, 'test/lib');
    expect(pathForChild).equal('lib');
  });
  it('should give empty path to child if its a full mach', () => {
    let pathForChild = undefined;
    const router = new Router([
      {
        path: 'test/lib',
        activate: (appendTo, path) => {
          pathForChild = path;
        },
      },
    ]);

    router.activate(appendToMock, 'test/lib');
    expect(pathForChild).equal('');
  });
  it('should give empty path to child if its a full mach, even if it ends with /', () => {
    let pathForChild = undefined;
    const router = new Router([
      {
        path: 'test/lib',
        activate: (appendTo, path) => {
          pathForChild = path;
        },
      },
    ]);

    router.activate(appendToMock, 'test/lib/');
    expect(pathForChild).equal('');
  });

  it('should work on n levels', () => {
    let pathForChild = undefined;
    let routerCalled = 0;
    let pathForChild2 = undefined;
    let router2Called = 0;

    const router2 = new Router([
      {
        path: 'costs',
        activate: (appendTo, path) => {
          router2Called++;
          pathForChild2 = path;
        },
      },
    ]);
    const router = new Router([
      {
        path: 'test/lib/',
        activate: (appendTo, path) => {
          routerCalled++;
          pathForChild = path;
          router2.activate(appendTo, path);
        },
      },
    ]);

    router.activate(appendToMock, 'test/lib/costs');
    expect(routerCalled).equal(1);
    expect(pathForChild).equal('costs');
    expect(router2Called).equal(1);
    expect(pathForChild2).equal('');
  });

  it('should cut path', () => {
    const router = new Router();
    const cutPath = router.cutPath('costs', 'costs');
    expect(cutPath).equal('');
  });

  it('should match any path if empty string', () => {
    let pathForChild = undefined;
    let routerCalled = 0;
    let pathForChild2 = undefined;
    let router2Called = 0;

    const router = new Router([
      {
        path: 'test/lib/',
        activate: (appendTo, path) => {
          routerCalled++;
          pathForChild = path;
        },
      },
      {
        path: '',
        activate: (appendTo, path) => {
          router2Called++;
          pathForChild2 = path;
        },
      },
    ]);

    router.activate(appendToMock, 'asdsa');
    expect(routerCalled).equal(0);
    expect(router2Called).equal(1);
    expect(pathForChild2).equal('asdsa');
  });
});
