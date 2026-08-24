class Device{
    constructor(node=0,name="device"){
        this.node = node;
        this.name = name;
        this.config = {};
        this.connections = [];
    }

    connect(device){
        if (!(device instanceof Device)){
            throw new Error("not an instance of Device");
        }
        this.connections.push(device)
    }

    configuration(config={}){
        this.config = {...this.config,...config}
    }
}
