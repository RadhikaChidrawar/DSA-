// maximum no of events that can be attaned

// You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at
// startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also
// given an integer k which represents the maximum number of events you can attend.You can only attend one event at a
// time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is,
// you cannot attend two events where one of them starts and the other ends on the same day.Return the maximum sum of values
// that you can receive by attending events.function maxValue(events, k) {

function maxValue(events, k) {
  // Sort events by start day
  events.sort((a, b) => a[0] - b[0]);

  const n = events.length;
  // Create a memoization table: dp[i][k]
  const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(-1));

  // Binary Search: Find the next non-overlapping event index
  function findNext(index) {
    let left = index + 1;
    let right = n - 1;
    let next = n;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (events[mid][0] > events[index][1]) {
        next = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return next;
  }

  // Recursive DP function with memoization
  function dfs(i, remaining) {
    if (i === n || remaining === 0) return 0;
    if (dp[i][remaining] !== -1) return dp[i][remaining];

    // Option 1: Skip current event
    let skip = dfs(i + 1, remaining);

    // Option 2: Attend current event
    let next = findNext(i);
    let take = events[i][2] + dfs(next, remaining - 1);

    // Maximize value
    dp[i][remaining] = Math.max(skip, take);
    return dp[i][remaining];
  }

  return dfs(0, k);
}
