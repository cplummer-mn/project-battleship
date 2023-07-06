import Ship from "../ship";

const shipOne = new Ship(3,[5,5]);

test('Ships sink when hit equal times to its length', () => {
    shipOne.hit();
    shipOne.hit();
    shipOne.hit();
    expect(shipOne.isSunk()).toBe(true);
});

test('Ships dont sink when hit less times to its length', () => {
    shipOne.hit();
    shipOne.hit();
    expect(shipOne.isSunk()).toBe(true);
});

