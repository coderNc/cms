export enum TypeStatus {
  SUCCESS = 1,
  FAIL = 0
}

class Test {
  status: TypeStatus;
  constructor() {
    this.status = TypeStatus.SUCCESS;
  }

  setStatus = (type: TypeStatus) => {
    this.status = type;
  };
  test = () => {
    this.setStatus(4);
  };
}

export default Test;
