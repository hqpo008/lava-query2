// 引用 ethers 模块
const { ethers }= require("ethers");
// 初始化一個 provider(連接到以太坊的 RPC 節點)
const provider = new ethers.JsonRpcProvider("https://eth1.lava.build/lava-referer-5cc8d791-cc62-4e8a-a4d5-26e8b54a41d8/")
// 讀取最新的區塊高度
provider.getBlockNumber().then((blockNumber)=>{
    console.log("Block number", blockNumber);
});
async function main(){
    //读取GAS FEE
    const gas=await provider.getFeeData()
    console.log("gas",ethers.formatUnits(gas.gasPrice,"gwei"),"gwei");
        //读取余额
    const balance = await provider.getBalance("0xC27b7Afb09b3751348949d91679EF69DD2D1da57");
    console.log("余额",`${ethers.formatEther(balance)} ETH`);
}

main();