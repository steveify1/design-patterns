/** The proxy pattern */

interface ISubject {
  do(): void;
}

class Subject implements ISubject {
  do() {
    console.log("Doing something");
  }
}

class SubjectProxy implements ISubject {
  constructor(private readonly s: ISubject) {}

  do() {
    console.log("Proxy doing some additinal work");
    this.s.do();
  }
}

class Client {
  constructor(private readonly s: ISubject) {}

  execute() {
    // Client using the subject, but as a proxy
    this.s.do();
  }
}

const subject = new Subject();
const subjectProxy = new SubjectProxy(subject);

const client = new Client(subjectProxy);
client.execute();
