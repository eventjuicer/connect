

export type Visitor = {
  id: number;
  fname: string;
  lname: string;
  domain: string;
  avatar: string;
}



export type Presenter = {
    id: number;
    fname: string;
    lname: string;
    domain: string;
}


export type ExhibitorProfile = {
    name: string;
    keywords: Array<string>;
}

export type ExhibitorPurchase = {
  formdata: {ti: string, id: string};
}

export type Exhibitor = {
    id: number;
    amount: number;
    slug: string;
    profile: ExhibitorProfile;
    instances: Array<ExhibitorPurchase>;
  }