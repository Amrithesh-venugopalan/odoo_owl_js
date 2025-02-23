/**@odoo-module **/
import { registry } from "@web/core/registry";
import { Component,useState,xml } from  "@odoo/owl";
import { useBus,useService } from "@web/core/utils/hooks";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";

class ServiceDashboardChild extends Component{
    static template = xml`
    <div style="background-color: #f0f0f0; padding: 10px;">
        <button t-on-click="triggerToParent">Send to Parent</button>
    </div>`;
    setup() {
        this.notificationService = useService("notification");

        this.triggerToParent = () => {
            this.env.bus.trigger('child_event', { data: 'From child' });
        };

        useBus(this.env.bus, 'parent_event', (ev) => {
            console.log("Child received:", ev.detail.data);
            this.notificationService.add(`Bus Event: ${ev.detail.data}`, { type: "info" });
            console.log(this)
        });
    }
}

class ServiceDashboard extends Component {
    static components = { ServiceDashboardChild };
    setup() {
        this.state = useState({
            message: "Hello, Odoo!",
        });
        this.actionService = useService("action");
        this.dialogService = useService("dialog");
        this.notificationService = useService("notification");
        this.rpc = useService("rpc");
        this.orm = useService("orm");
        this.userService = useService("user");
        console.log(this)
        const fetchData = async () => {
            const data = await this.orm.searchRead("res.partner", [], ["name", "email"]);
            console.log("Fetched Data:", data);
            this.notificationService.add("Data fetched successfully!", { type: "success" });
        };
        fetchData();

        useBus(this.env.bus, 'child_event', (ev) => {
            console.log("Parent received:", ev.detail.data);
            this.notificationService.add(`Bus Event: ${ev.detail.data}`, { type: "info" });
            console.log(this)
        });

        this.triggerToChild = () => {
            this.env.bus.trigger('parent_event', { data: 'From parent' });
        };

    }
    handleTestEvent(ev) {
        console.log("Received event:", ev);
    }
    async confirmSaleOrder(){
        const draftOrderId = await this.orm.searchRead("sale.order", [["state", "=", "draft"]], ["id", "name"],{
                        limit: 1,
                    });
        console.log("Draft Order Id:", draftOrderId);
        await this.actionService.doActionButton({
            name: "action_confirm",
            type: "object",
            resModel: "sale.order",
            resId: draftOrderId[0].id,
        });

    }

    async handleAction() {
        await this.actionService.doAction({
            name: "Do Action Test",
            type: "ir.actions.act_window",
            res_model: "res.partner",
            views: [
                [false, "list"],
                [false, "form"]
            ],
            target: "new",
            domain: [],
        });
    }
    async handleDialog() {
        this.dialogService.add(ConfirmationDialog, {
            title: "My Dialog",
            body: "This is a dialog example.",
            confirm: () => {
                this.notificationService.add("Dialog confirmed!", { type: "success" });
            },
            cancel: () => {},
        });
    }
    async handleRPC() {
        const result = await this.rpc("/my/custom/endpoint", {
            param1: 5,
            param2: 2,
        });
        this.notificationService.add(`RPC Result: ${result}`, { type: "info" });
    }
    handleUserInfo() {
        const userName = this.userService.name;
        this.notificationService.add(`Logged in as: ${userName}`, { type: "info" });
    }
}


ServiceDashboard.template = "odoo_owl_services.ServiceDashboard";
const actionRegistry = registry.category("actions");
actionRegistry.add("service_dashboard_tag", ServiceDashboard);
