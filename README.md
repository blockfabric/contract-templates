# Block Fabric Contract Templates

![npm](https://img.shields.io/npm/v/@blockfabric/contract-templates)

Block Fabric Smart Contract Templates used in https://www.blockfabric.dev platform.

Note that this repository only stores the templates, and not the entire Block Fabric platform.

## Installation

To install the package, run the following command:

```bash
npm install @blockfabric/contract-templates
```

## Usage
After installation, you can import and use the contract templates in your blockchain projects. The main entry point is dist/index.js.

## Build
If you wish to build the project locally:

```bash
npm run build
```

This will produce the required output in the dist directory.

## Contributing
We welcome any contributors! If you have any suggestions or improvements, please submit a pull request.

Clone the repository:

```bash
git clone https://github.com/blockfabric/contract-templates.git
```

Navigate to the project directory:

```bash
cd contract-templates
```

Install the dependencies:

```bash
npm install
```

Make your changes and submit a pull request!

## Continuous Integration (CI)
The repository is configured with GitHub Actions to automatically build and publish to the NPM registry whenever a new release tag (e.g., `v0.1.2`) is pushed. You can view the workflow in `.github/workflow/package.yml`.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
Special thanks to [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) for providing robust contract building blocks.
