import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { describeSpecOfERC20 } from '../../../spec';
import {
  ERC20,
  ERC20Mock,
  ERC20Mock__factory,
} from '../../../typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ERC20', function () {
  let sender: SignerWithAddress;
  let receiver: SignerWithAddress;
  let holder: SignerWithAddress;
  let spender: SignerWithAddress;
  let instance: ERC20Mock;

  before(async function () {
    [sender, receiver, holder, spender] = await ethers.getSigners();
  });

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners();
    instance = await new ERC20Mock__factory(deployer).deploy();
  });

  describeSpecOfERC20(async () => instance, {
    supply: ethers.constants.Zero,
    mint: (recipient, amount) => instance.mint(recipient, amount),
    burn: (recipient, amount) => instance.burn(recipient, amount),
  });

  describe('ERC20meta', function () {
    describe('#totalSupply()', function () {
      it('todo');
    });

    describe('#balanceOf(address)', function () {
      it('todo');
    });

    describe('#mint(address,uint256)', function () {
      it('increases balance of given account by given amount', async function () {
        let amount = ethers.constants.Two;

        await expect(() =>
          instance.mint(receiver.address, amount),
        ).to.changeTokenBalance(instance, receiver, amount);
      });

      it('increases total supply by given amount', async function () {
        let amount = ethers.constants.Two;

        let initialSupply = await instance.callStatic['totalSupply()']();
        await instance.mint(receiver.address, amount);
        let finalSupply = await instance.callStatic['totalSupply()']();

        expect(finalSupply.sub(initialSupply)).to.equal(amount);
      });

      it('emits Transfer event', async function () {
        let amount = ethers.constants.Two;

        await expect(instance.mint(receiver.address, amount))
          .to.emit(instance, 'Transfer')
          .withArgs(ethers.constants.AddressZero, receiver.address, amount);
      });

      describe('reverts if', function () {
        it('given account is zero address', async function () {
          await expect(
            instance.mint(
              ethers.constants.AddressZero,
              ethers.constants.Zero,
            ),
          ).to.be.revertedWithCustomError(
            instance,
            'ERR_ERC20_MintToZeroAddress',
          );
        });
      });
    });

    describe('#burn(address,uint256)', function () {
      it('decreases balance of given account by given amount', async function () {
        let amount = ethers.constants.Two;
        await instance.mint(receiver.address, amount);

        await expect(() =>
          instance.burn(receiver.address, amount),
        ).to.changeTokenBalance(
          instance,
          receiver,
          amount.mul(ethers.constants.NegativeOne),
        );
      });

      it('decreases total supply by given amount', async function () {
        let amount = ethers.constants.Two;
        await instance.mint(receiver.address, amount);

        let initialSupply = await instance.callStatic['totalSupply()']();
        await instance.burn(receiver.address, amount);
        let finalSupply = await instance.callStatic['totalSupply()']();

        expect(initialSupply.sub(finalSupply)).to.equal(amount);
      });

      it('emits Transfer event', async function () {
        let amount = ethers.constants.Two;
        await instance.mint(receiver.address, amount);

        await expect(instance.burn(receiver.address, amount))
          .to.emit(instance, 'Transfer')
          .withArgs(receiver.address, ethers.constants.AddressZero, amount);
      });

      describe('reverts if', function () {
        it('given account is zero address', async function () {
          await expect(
            instance.burn(
              ethers.constants.AddressZero,
              ethers.constants.Zero,
            ),
          ).to.be.revertedWithCustomError(
            instance,
            'ERR_ERC20_BurnFromZeroAddress',
          );
        });

        it('burn amount exceeds balance', async () => {
          await instance.mint(receiver.address, 100);
          await expect(
            instance.burn(receiver.address, 101),
          ).to.be.revertedWithCustomError(
            instance,
            'ERR_ERC20_BurnExceedsBalance',
          );
        });
      });
    });

    // describe('#_transfer(address,address,uint256)', function () {
    //   it('decreases balance of sender and increases balance of recipient by given amount', async function () {
    //     let amount = ethers.constants.Two;
    //     await instance.mint(sender.address, amount);

    //     await expect(() =>
    //       instance.transfer(sender.address, receiver.address, amount),
    //     ).to.changeTokenBalances(
    //       instance,
    //       [sender, receiver],
    //       [amount.mul(ethers.constants.NegativeOne), amount],
    //     );
    //   });

    //   it('does not modify total supply', async function () {
    //     let amount = ethers.constants.Two;
    //     await instance.mint(sender.address, amount);

    //     let initialSupply = await instance.callStatic['totalSupply()']();
    //     await instance.transfer(sender.address, receiver.address, amount);
    //     let finalSupply = await instance.callStatic['totalSupply()']();

    //     expect(finalSupply).to.equal(initialSupply);
    //   });

    //   it('emits Transfer event', async function () {
    //     let amount = ethers.constants.Two;
    //     await instance.mint(sender.address, amount);

    //     await expect(
    //       instance.transfer(sender.address, receiver.address, amount),
    //     )
    //       .to.emit(instance, 'Transfer')
    //       .withArgs(sender.address, receiver.address, amount);
    //   });

    //   describe('reverts if', function () {
    //     it('sender is the zero address', async function () {
    //       await expect(
    //         instance.transfer(
    //           ethers.constants.AddressZero,
    //           receiver.address,
    //           ethers.constants.Zero,
    //         ),
    //       ).to.be.revertedWithCustomError(
    //         instance,
    //         'ERC20__TransferFromZeroAddress',
    //       );
    //     });

    //     it('receiver is the zero address', async function () {
    //       await expect(
    //         instance.transfer(
    //           sender.address,
    //           ethers.constants.AddressZero,
    //           ethers.constants.Zero,
    //         ),
    //       ).to.be.revertedWithCustomError(
    //         instance,
    //         'ERC20__TransferToZeroAddress',
    //       );
    //     });
    //   });
    // });

    // describe('#_approve(address,address,uint256)', function () {
    //   it('sets approval of spender with respect to holder to given amount', async function () {
    //     let amount = ethers.constants.Two;

    //     await instance
    //       .connect(holder)
    //       .__approve(holder.address, spender.address, amount);
    //     await expect(
    //       await instance.callStatic['allowance(address,address)'](
    //         holder.address,
    //         spender.address,
    //       ),
    //     ).to.equal(amount);

    //     // approvals are not cumulative
    //     await instance
    //       .connect(holder)
    //       .__approve(holder.address, spender.address, amount);
    //     await expect(
    //       await instance.callStatic['allowance(address,address)'](
    //         holder.address,
    //         spender.address,
    //       ),
    //     ).to.equal(amount);
    //   });

    //   it('emits Approval event', async function () {
    //     let amount = ethers.constants.Two;

    //     await expect(
    //       instance.approve(holder.address, spender.address, amount),
    //     )
    //       .to.emit(instance, 'Approval')
    //       .withArgs(holder.address, spender.address, amount);
    //   });

    //   describe('reverts if', function () {
    //     it('holder is the zero address', async function () {
    //       await expect(
    //         instance.approve(
    //           ethers.constants.AddressZero,
    //           spender.address,
    //           ethers.constants.Zero,
    //         ),
    //       ).to.be.revertedWithCustomError(
    //         instance,
    //         'ERC20__ApproveFromZeroAddress',
    //       );
    //     });

    //     it('spender is the zero address', async function () {
    //       await expect(
    //         instance.approve(
    //           holder.address,
    //           ethers.constants.AddressZero,
    //           ethers.constants.Zero,
    //         ),
    //       ).to.be.revertedWithCustomError(
    //         instance,
    //         'ERC20__ApproveToZeroAddress',
    //       );
    //     });
    //   });
    // });

    // describe('#_decreaseAllowance(address,address,uint256)', function () {
    //   it('reduces approval of spender with respect to holder by given amount', async function () {
    //     await instance.approve(
    //       holder.address,
    //       spender.address,
    //       ethers.constants.Two,
    //     );

    //     await instance
    //       .connect(holder)
    //       .__decreaseAllowance(
    //         holder.address,
    //         spender.address,
    //         ethers.constants.One,
    //       );

    //     await expect(
    //       await instance.callStatic['allowance(address,address)'](
    //         holder.address,
    //         spender.address,
    //       ),
    //     ).to.equal(ethers.constants.One);

    //     // decreases are cumulative
    //     await instance
    //       .connect(holder)
    //       .__decreaseAllowance(
    //         holder.address,
    //         spender.address,
    //         ethers.constants.One,
    //       );

    //     await expect(
    //       await instance.callStatic['allowance(address,address)'](
    //         holder.address,
    //         spender.address,
    //       ),
    //     ).to.equal(ethers.constants.Zero);
    //   });

    //   // it('emits Approval event', async function () {
    //   //   await instance.approve(
    //   //     holder.address,
    //   //     spender.address,
    //   //     ethers.constants.Two,
    //   //   );

    //   //   await expect(
    //   //     instance.decreaseAllowance(
    //   //       holder.address,
    //   //       spender.address,
    //   //       ethers.constants.One,
    //   //     ),
    //   //   )
    //   //     .to.emit(instance, 'Approval')
    //   //     .withArgs(holder.address, spender.address, ethers.constants.One);
    //   // });

    //   // describe('reverts if', function () {
    //   //   it('holder is the zero address', async function () {
    //   //     await expect(
    //   //       instance.decreaseAllowance(
    //   //         ethers.constants.AddressZero,
    //   //         spender.address,
    //   //         ethers.constants.Zero,
    //   //       ),
    //   //     ).to.be.revertedWithCustomError(
    //   //       instance,
    //   //       'ERC20__ApproveFromZeroAddress',
    //   //     );
    //   //   });

    //     // it('spender is the zero address', async function () {
    //     //   await expect(
    //     //     instance.decreaseAllowance(
    //     //       holder.address,
    //     //       ethers.constants.AddressZero,
    //     //       ethers.constants.Zero,
    //     //     ),
    //     //   ).to.be.revertedWithCustomError(
    //     //     instance,
    //     //     'ERC20__ApproveToZeroAddress',
    //     //   );
    //     // });
    //   });
    // });

    // describe('#_beforeTokenTransfer(address,address,uint256)', function () {
    //   it('todo');
    // });
  });
});
