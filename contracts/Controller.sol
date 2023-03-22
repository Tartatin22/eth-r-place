// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Controller {
    uint[256] public pixels;

    event PixelChanged(uint x, uint y, uint color);

    constructor () {
        for (uint i = 0; i < 256; i++) {
            pixels[i] = 0;
        }
    }

    function getPixel(uint x, uint y) public view returns (uint) {
        return pixels[x + y * 16];
    }

    function getAllPixels() public view returns (uint[256] memory) {
        return pixels;
    }

    function setPixel(uint x, uint y, uint color) public {
        pixels[x + y * 16] = color;
        emit PixelChanged(x, y, color);
    }
}
