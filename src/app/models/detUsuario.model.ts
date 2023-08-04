export interface Usuario {
  data:    DataUsuarios;
  support: Support;
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
