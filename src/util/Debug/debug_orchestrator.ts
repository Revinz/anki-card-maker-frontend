import { deprecate } from "util";
import Debug from "./debug"


export default class DebugOrchestrator {
    allEnabled : boolean = false;
    enabledDebuggers : Debug[] = [];

    //Singleton
    static debugInstance : DebugOrchestrator;
    constructor() {
        if (!DebugOrchestrator.debugInstance)
            DebugOrchestrator.debugInstance = this;

        return DebugOrchestrator.debugInstance;
    }

    public static addNewDebugger(debug : Debug) : void {
        //Add the context if it doesn't exist already
        if (DebugOrchestrator.debugInstance.enabledDebuggers.filter((e : Debug) => {
            return e.context === debug.context
        }).length === 0)
        {
            DebugOrchestrator.debugInstance.enabledDebuggers.push(new Debug(debug.context))
        }
    }
}
