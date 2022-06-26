const crypto = require("crypto");

// There are many If conditions that need to be optimized
// First Steps is to reduces Ifs by removing un necessary If conditions
// Second Step Write reusable small functions
// Third Step Write tests for the functions

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  const assignEventToCandidate = (event) => {
    candidate = event.partitionKey;
    return candidate;
  };

  const hashCandidate = (data) => {
    if (data === candidate && candidate.length <= MAX_PARTITION_KEY_LENGTH) {
      return candidate;
    } else {
      data = typeof data !== "string" ? JSON.stringify(data) : data;
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
      return candidate;
    }
  };
  if (event) {
    if (event.partitionKey) {
      assignEventToCandidate(event);
    } else {
      hashCandidate(event);
    }
  } else {
    candidate = candidate ? candidate : TRIVIAL_PARTITION_KEY
    hashCandidate(candidate);
  }
  return candidate;
};
