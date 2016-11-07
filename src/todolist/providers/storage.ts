
export class Storage {

    public setItem(key:string, value:any):void {
        console.log(`saving ${key} and ${value}`)
    }

    public getItem(key:string):any {
       console.log(`getting ${key}`)
   }

}