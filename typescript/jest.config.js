module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testURL: "http://localhost",
  testMatch: ["**/tests/*test*.(ts|tsx|js|jsx)"],
  moduleDirectories: ["node_modules", "bower_components"],
};
