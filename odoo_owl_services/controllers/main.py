from odoo import http


class ServiceController(http.Controller):

    @http.route('/my/custom/endpoint', type='json', auth='public')
    def test_rpc(self, **kwargs):
        return int(kwargs.get('param1'))*int(kwargs.get('param2'))