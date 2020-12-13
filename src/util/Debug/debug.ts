import DebugOrchestrator from "./debug_orchestrator"

export default class Debug {
    context : string;
    enabled = true;
    color : string | undefined;

    orchestrator : DebugOrchestrator = new DebugOrchestrator();
    constructor(context : string, color? : string) {
        this.context = context;
        this.color = color;
    }

    public log(message : string) {
        if (this.enabled) {
            console.log(message)
        }
    }

    public enable() {
        this.enabled = true;
    }

    public disable() {
        this.enabled = false;
    }

}