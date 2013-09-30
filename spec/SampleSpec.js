describe("Sample Test", function() {
  it("should be a div", function() {
    expect($('<div id="some-id"></div>')).toBe('div');
  });
});