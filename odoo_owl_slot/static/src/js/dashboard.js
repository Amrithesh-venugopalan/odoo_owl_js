/**@odoo-module **/
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";

export class ListContainer extends Component {
    static template = "example.ListContainer";
    static props = {
        items: {
            type: Array,
            element: {
                type: Object,
                shape: {
                    id: Number,
                    title: String,
                    description: String,
                },
            },
        },
        slots: { type: Object, optional: true },
    };
}

export class ItemCard extends Component {
    static template = "example.ItemCard";
    static props = {
        item: {
            type: Object,
            shape: {
                id: Number,
                title: String,
                description: String,
            },
        },
        class: { type: String, optional: true },
        class_x: { type: Object, optional: true}
    };
    static defaultProps = {
        class: {"test-card":true},
    };
}

export class MainView extends Component {
    static template = "example.MainView";
    static components = { ListContainer, ItemCard };

    setup() {
        this.state = {
            selectedId: null,
            items: [
                { id: 1, title: "First Item", description: "Description 1" },
                { id: 2, title: "Second Item", description: "Description 2" },
                { id: 3, title: "Third Item", description: "Description 3" },
            ],
        };
    }

    selectItem(id) {
        console.log('hello')
        this.state.selectedId = id;
    }
}
const actionRegistry = registry.category("actions");
actionRegistry.add("test_dashboard_tag", MainView);
