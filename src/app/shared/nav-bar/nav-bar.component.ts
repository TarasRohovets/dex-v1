import { Component, OnInit, ViewChild } from '@angular/core';
import Web3 from 'web3';

declare let window: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('modalConnectWallet') modalClose: any;

  public web3: any;
  public networkId: any;
  public account: any;
  public balance: any;
  connected: boolean = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    const account = localStorage.getItem("Account");
    if(account){
     await this.connectMetaMask();
    }
  }

  async connectMetaMask(){
    console.log("i am here")
    if (window.ethereum) {
      console.log("i am here 2")
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await this.loadBlockChainData();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      await this.loadBlockChainData();
    } else {
      window.alert('No Metamask detected');
    }
  }

  async loadBlockChainData() {
    this.web3 = window.web3;
    this.networkId = await this.web3.eth.net.getId();
    const accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];
    const balance = await this.web3.eth.getBalance(this.account);
    this.balance = this.web3.utils.fromWei(balance, 'ether');
    localStorage.setItem("Account", this.account);
    this.modalClose.nativeElement.click();
    this.connected = true;
    //await this.initAbisContracts();
    //await this.getEthBalance();
    //await this.getTokenListedInDex();
  }

}
