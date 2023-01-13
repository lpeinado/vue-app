export interface TodoItem {
  id: number;
  caption: string;
  isChecked: boolean; 
}
export type FilterType = "all"|"checked"|"unchecked"