export class Usuario {

  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ) { }

}

export interface Usuarios {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        DataUsuarios[];
  support:     Support;
}

export interface DataUsuarios {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}

