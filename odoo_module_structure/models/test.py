from odoo import models, fields, api

class Test(models.Model):
    _name = 'test.test'
    _description = 'Test'

    name = fields.Char()