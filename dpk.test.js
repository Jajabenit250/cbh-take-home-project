const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when given 'key' ", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "test" });
    expect(trivialKey).toBe("test");
  });

  it("Returns the hash when no partition key 'key' ", () => {
    const trivialKey = deterministicPartitionKey("data");
    expect(trivialKey).toBe(
      "ceca4daf960c2bbfb4a9edaca9b8137a801b65bae377e0f534ef9141c8684c0fedc1768d1afde9766572846c42b935f61177eaf97d355fa8dc2bca3fecfa754d"
    );
  });
});
