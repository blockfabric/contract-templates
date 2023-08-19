import { Template } from '../types/template';
import OpenZeppelinERC721 from '../dependencies/@openzeppelin/contracts/token/ERC721/ERC721';
import OpenZeppelinIERC721Receiver from '../dependencies/@openzeppelin/contracts/token/ERC721/IERC721Receiver';
import OpenZeppelinIERC721 from '../dependencies/@openzeppelin/contracts/token/ERC721/IERC721';
import OpenZeppelinIERC721Metadata from '../dependencies/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata';
import OpenZeppelinERC721Enumerable from '../dependencies/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable';
import OpenZeppelinIERC721Enumerable from '../dependencies/@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable';
import OpenZeppelinAddress from '../dependencies/@openzeppelin/contracts/utils/Address';
import OpenZeppelinContext from '../dependencies/@openzeppelin/contracts/utils/Context';
import OpenZeppelinStrings from '../dependencies/@openzeppelin/contracts/utils/Strings';
import OpenZeppelinERC165 from '../dependencies/@openzeppelin/contracts/utils/introspection/ERC165';
import OpenZeppelinIERC165 from '../dependencies/@openzeppelin/contracts/utils/introspection/IERC165';
import OpenZeppelinMath from '../dependencies/@openzeppelin/contracts/utils/math/Math';
import OpenZeppelinSignedMath from '../dependencies/@openzeppelin/contracts/utils/math/SignedMath';
import OpenZeppelinCounters from '../dependencies/@openzeppelin/contracts/utils/Counters';
import OpenZeppelinOwnable from '../dependencies/@openzeppelin/contracts/access/Ownable';

export const CODE: string = `
// SPDX-License-Identifier: {{license}}
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract {{contractName}} is ERC721, ERC721Enumerable, Ownable {
    string private _baseTokenURI;
    uint256 private _tokenIdCounter;

    constructor(string memory baseTokenURI) ERC721("{{tokenName}}", "{{symbol}}") {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize)
        internal
        virtual
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Public function to expose the base URI
    function baseURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    // Minting function restricted to the owner
    function mint() public onlyOwner {
        _mint(msg.sender, _tokenIdCounter);
        _tokenIdCounter++;
    }
}
`;

export const TEMPLATE: Template = {
  templateId: '2',
  name: 'ERC721 NFT Contract',
  description:
    'ERC721 is an open standard for creating non-fungible tokens (NFTs) on the blockchain, allowing for the ownership and transfer of unique assets.',
  tags: ['NFT', 'ERC721'],
  code: CODE.trim(),
  inputs: [
    {
      key: 'tokenName',
      label: 'Token or Collection Name',
      description: 'Enter the name of the NFT collection',
      dataType: 'string',
      defaultValue: '',
      required: true,
    },
    {
      key: 'symbol',
      label: 'Symbol',
      description: 'Enter the symbol of the NFT collection',
      dataType: 'string',
      defaultValue: '',
      required: true,
    },
  ],
  dependencies: [
    {
      path: '@openzeppelin/contracts/access/Ownable.sol',
      fileContent: OpenZeppelinOwnable,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/ERC721.sol',
      fileContent: OpenZeppelinERC721,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol',
      fileContent: OpenZeppelinIERC721Receiver,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/IERC721.sol',
      fileContent: OpenZeppelinIERC721,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol',
      fileContent: OpenZeppelinIERC721Metadata,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol',
      fileContent: OpenZeppelinERC721Enumerable,
    },
    {
      path: '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol',
      fileContent: OpenZeppelinIERC721Enumerable,
    },
    {
      path: '@openzeppelin/contracts/utils/Address.sol',
      fileContent: OpenZeppelinAddress,
    },
    {
      path: '@openzeppelin/contracts/utils/Context.sol',
      fileContent: OpenZeppelinContext,
    },
    {
      path: '@openzeppelin/contracts/utils/Counters.sol',
      fileContent: OpenZeppelinCounters,
    },
    {
      path: '@openzeppelin/contracts/utils/Strings.sol',
      fileContent: OpenZeppelinStrings,
    },
    {
      path: '@openzeppelin/contracts/utils/introspection/ERC165.sol',
      fileContent: OpenZeppelinERC165,
    },
    {
      path: '@openzeppelin/contracts/utils/introspection/IERC165.sol',
      fileContent: OpenZeppelinIERC165,
    },
    {
      path: '@openzeppelin/contracts/utils/math/Math.sol',
      fileContent: OpenZeppelinMath,
    },
    {
      path: '@openzeppelin/contracts/utils/math/SignedMath.sol',
      fileContent: OpenZeppelinSignedMath,
    },
  ],
};

export default TEMPLATE;
