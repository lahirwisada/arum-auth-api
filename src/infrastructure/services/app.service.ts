import { Injectable } from '@nestjs/common';
// import { AcaktextService } from '../../lib/acak-text/src/services/acaktext.service';
import { AcaktextService } from '@lahirwisada/acak-text';

@Injectable()
export class AppService {
  public constructor(private readonly _acakTextService: AcaktextService) {
  }
  getHello(): string {
    return 'Hello Guys!';
  }
  showEncode(): string{
    return this._acakTextService.encode('lahir');
  }
  showDecode(): string{
    let encodedStr: string = "eyJpdiI6Ik1WZld5akZVSFBpcTVSbmp6OHcxeGc9PSIsInZhbHVlIjoidHJnY25vOFBISnRZbjVGWGwxUC9Sdz09IiwibWFjIjoiYjZlODg4NjU3M2E5MzFhZTYzN2ViYWUwMWZhMWU2NWE3ZmE3ODczMzUzMDljNzExNWEwN2U1NGU4OWQ3ZDExYyJ9";
    return this._acakTextService.decode(encodedStr);
  }
  showText(text: string): string{
    return "ini dia "+text;
  }
}
