export class Tag{
    static readonly ANGULAR= new Tag('Angular','#DD0031');
    static readonly TYPESCRIPT= new Tag('TypeScript','#3178C6');
    static readonly PYTHON= new Tag('Python','#f55c04');
    static readonly JAVA= new Tag('Java','#00b2f8');
    static readonly CSS= new Tag('CSS','#264de4');
    static readonly HTML= new Tag('HTML','#e34f26');
    static readonly C= new Tag('C','#00599C');
    static readonly MachineLevel= new Tag('v','#00599C');
    static readonly JAVASCRIPT= new Tag('JS','#000000');
    static readonly SPRINGBOOT= new Tag('Spring Boot','#6DB33F');
    static readonly FLUTTER= new Tag('Flutter','#00599C');
    static readonly SQL= new Tag('SQL','#f29111');
    private constructor(private key:string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}