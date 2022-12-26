export interface InterfaceTask {
    taskName:string;
    finishDay:number;
}
export interface PropsTask {
    task:InterfaceTask;
    deleteTask (itemDeleted:string):void;
}
