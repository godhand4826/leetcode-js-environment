;(function () {
    const _ = require('lodash');
    global._ = _;

    const { Queue } = require('@datastructures-js/queue');
    global.Queue = Queue;

    const {
        PriorityQueue,
        MinPriorityQueue,
        MaxPriorityQueue
    } = require('@datastructures-js/priority-queue');
    global.PriorityQueue = PriorityQueue;
    global.MinPriorityQueue = MinPriorityQueue;
    global.MaxPriorityQueue = MaxPriorityQueue;
})();
