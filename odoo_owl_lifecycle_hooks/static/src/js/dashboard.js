/**@odoo-module **/
import { registry } from "@web/core/registry";
import {
    Component,
    onWillStart,
    onMounted,
    onPatched,
    onWillUpdateProps,
    onWillPatch,
    onWillUnmount,
    onWillDestroy,
    useState,
    useRef,
    useEffect,
} from "@odoo/owl";

export class HooksDashboard extends Component {
    static template = "example.HooksExample";
    static props = {
        value: { type: Number },
    };
    static defaultProps = {
        value: 0
    };

    setup() {
        this.state = useState({
            counter: 0,
            name: "John"
        });
        this.buttonRef = useRef("incrementButton");
        onWillStart(() => {
            console.log("onWillStart - Before first rendering");
        });

        onMounted(() => {
            console.log("onMounted - After first rendering, DOM is ready");
            if (this.buttonRef.el) {
                this.buttonRef.el.focus();
            }
        });

        onWillUpdateProps((nextProps) => {
            console.log("onWillUpdateProps - Before props update", {
                current: this.props,
                next: nextProps
            });
        });

        onWillPatch(() => {
            console.log("onWillPatch - Before DOM update");
        });

        onPatched(() => {
            console.log("onPatched - After DOM update");
        });

        onWillUnmount(() => {
            console.log("onWillUnmount - Before component removal from DOM");
        });

        onWillDestroy(() => {
            console.log("onWillDestroy - Before component destruction");
        });

        useEffect(
            () => {
                console.log("Use Effect - counter changed:", this.state.counter);
            },
            () => [this.state.counter]
        );
    }

    increment() {
        this.state.counter++;
        this.props.value+=1;
    }

    updateName() {
        this.state.name = "Jane";
    }
}


export class ParentComponent extends Component {
    static components ={HooksDashboard};
    static template = "example.ParentComponent";

    setup() {
        this.state = useState({
            dashboardValue: 0,
        });
    }
    counter_increase(){
        this.state.dashboardValue+=1
    }
}
const actionRegistry = registry.category("actions");
actionRegistry.add("hooks_tag", ParentComponent);