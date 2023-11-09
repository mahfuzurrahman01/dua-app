export type ICategory = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

export type ISubcategory = {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
};
export type IDua = {
  audio?: string;
  bottom_bn?: null;
  bottom_en?: null;
  cat_id?: number;
  clean_arabic?: string;
  dua_arabic?: string;
  dua_id?: number;
  dua_indopak?: string;
  dua_name_bn?: string;
  dua_name_en?: string;
  id?: number;
  refference_bn?: string;
  refference_en?: string;
  subcat_id?: number;
  top_bn?: string;
  top_en?: string;
  translation_bn?: string;
  translation_en?: string;
  transliteration_bn?: string;
  transliteration_en?: string;
};
