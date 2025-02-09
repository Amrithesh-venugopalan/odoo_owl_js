/**@odoo-module **/
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";

class TestDashboard extends Component {


}
TestDashboard.template = "odoo_module_structure.TestDashboard";
const actionRegistry = registry.category("actions");
actionRegistry.add("test_dashboard_tag", TestDashboard);
