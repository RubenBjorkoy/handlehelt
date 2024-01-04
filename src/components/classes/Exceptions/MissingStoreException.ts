class MissingStoreException extends Error {
  constructor() {
    super("error: Store not found");
  }
}
