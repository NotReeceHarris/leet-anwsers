# https://leetcode.com/problems/print-foobar-alternately/

import threading

class FooBar:
    def __init__(self, n):
        self.n = n
        self.fooEvent = threading.Event()
        self.barEvent = threading.Event()
        self.fooEvent.set()

    def foo(self, printFoo: 'Callable[[], None]') -> None:
        for i in range(self.n):
            self.fooEvent.wait()
            # printFoo() outputs "foo". Do not change or remove this line.
            printFoo()
            self.fooEvent.clear()
            self.barEvent.set()

    def bar(self, printBar: 'Callable[[], None]') -> None:
        for i in range(self.n):
            self.barEvent.wait()
            # printBar() outputs "bar". Do not change or remove this line.
            printBar()
            self.barEvent.clear()
            self.fooEvent.set()