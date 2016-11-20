
import {FormControl} from "@angular/forms";

export class StringValidators {

  static noSpace(control:FormControl){

    if(control.value.indexOf(' ') > 0) {
      return { isSpace: true }
    }

    return null;
  }

  static isUnique(control:FormControl){
    return new Promise( resolve  => {
      console.log('go to server');
      setTimeout( () => {
        console.log('server returns');
        resolve(null)
      }, 5000)
    })
  }

}