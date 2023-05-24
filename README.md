# Event-Loop

Event-Loop: 
i)	A node program is run inside a thread. Different nodejs program required diffreretn number of threads. Inside thread there is 1 event-loop. EL is as being a control structure that decides what our one thread should be doing at any given point of time. Every program has only 1 EL.
ii)	Now c code to have better understanding.
IS NODE SINGLE THREADED:

The statement `process.env.UV_THREADPOOL_SIZE = 1;` sets the environment variable `UV_THREADPOOL_SIZE` to a value of 1 in the current Node.js process.
The `UV_THREADPOOL_SIZE` environment variable controls the size of the thread pool used by the libuv library in Node.js for handling certain types of I/O operations such as file system operations, network requests, and cryptography. By default, the thread pool size is equal to the number of CPU cores on the machine, but it can be increased or decreased depending on the needs of the application.
Setting the value of `UV_THREADPOOL_SIZE` to 1 limits the size of the thread pool to a single thread, which means that all I/O operations will be executed on the same thread. This can be useful for debugging or testing purposes, as it can help identify potential issues related to thread synchronization or concurrency.
However, it's important to note that limiting the thread pool size to 1 may not be optimal for production use cases, as it can result in slower I/O performance and decreased overall throughput for the application.
         
 
If nIf node was single threaded, then func#2 would have started after func#1 gets finished but the readlity is..
 

Suppose we 5 func instead of 2, then 1st 4 gets executed within 1s and the 5th gets executed by taking a pause and has time greater than 1s.
 
For us it’s 0-1s for the 1st 4 operation and and greater>1 for the 5th operation.
i)	When there are 2 hashing functions, each function get assigned to 2 different threads and that thread gets connected to different cores(supposing that our CPU is dual core.) So both took more or less exactly one second for each core to finish the hashing function call.
 
ii)	When there are 2 hashing functions, each function get assigned to 2 different threads and that thread gets connected to different cores(supposing that our CPU is dual core.) So both took more or less exactly one second for each core to finish the hashing function call.
iii)	 
iv)	The 1st 4func took nearly around double time to complete and then the 5th func came to picture and it took 1s

  
Uptill now we have discussed the threadpool that is automatically created by the libuv any time we start up our node program that explains the presence of this pending operations[] inside our event loop.
