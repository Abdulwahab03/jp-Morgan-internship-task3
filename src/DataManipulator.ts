import { ServerRespond } from './DataStreamer';

export interface Row {
price_abc: number,
price_def: number,
ratio: number,
timestamp:Date,
upperbound:number,
lower_bound: number,
trigger_alert: number| undefined,

}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]):{
  const priceABS = (serverRespond[0].top_ask_price+serverRespond[0].top_bid.price) / 2;
  const priceDEF = (serverRespond[1].top_ask_price+serverRespond[1].top_bid.price) / 2;
  const ratio = priceABC/priceDEF;
  const upperbound = 1+0.05;
  const lowerBound = 1-0.05;
  return{
  price_abc: priceABC,
  price_def: priceDEF,
  ratio,
  timestamp: serverRespond[0].timestamp> serverRespond[1].timestamp?
  serverRespond[0].timestamp: serverRespond[1].timestamp,
  upper_bound:upperbound,
  lower_bound: lowerBound,
  trigger_alert: (ratio>upperBound|| ratio<lowerBound)? ratio:undefined,
  }

    return serverResponds.map((el: any) => {
      return {
        stock: el.stock,
        top_ask_price: el.top_ask && el.top_ask.price || 0,
        timestamp: el.timestamp,
      };
    })
  }
}
