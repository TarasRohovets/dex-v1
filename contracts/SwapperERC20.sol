pragma solidity 0.7.1;

import "./interfaces/ISwapperERC20.sol";
import "./libraries/SafeMath.sol";

contract SwapperERC20 is ISwapperERC20 {
    using SafeMath for uint256;

    string public constant name = "Swapper";
    string public constant symbol = "Swapper";
    uint8 public constant decimals = 18;
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
}