interface InterdealA11y {
    openMenu: () => void;
  }
  
  interface Interdeal {
    a11y: InterdealA11y;
  }
  
  interface Window {
    interdeal?: Interdeal;
  }