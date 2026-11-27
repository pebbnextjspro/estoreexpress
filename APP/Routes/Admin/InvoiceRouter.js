const express = require('express');
const { CreateInvoice, GetInvoiceTotal } = require('../../Controller/Admin/InvoiceController');
const InvoiceRoutes = express.Router();

InvoiceRoutes.post('/invoice-create/:invoicenumber' , CreateInvoice);
InvoiceRoutes.get('/invoice-total/:id' , GetInvoiceTotal);

module.exports = InvoiceRoutes