export class Pais {
  name: String;
  capital:String;
  subregion:String;
  nativeName:String;
  flag:String;
  region:String;

  constructor(p:any){
    this.capital = p.capital;
    this.name = p.name;
    this.subregion = p.subregion;
    this.nativeName = p.nativeName;
    this.flag = p.flags.png;
    this.region = p.region;
  }
}
