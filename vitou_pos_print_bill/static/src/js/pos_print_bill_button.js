/**@odoo-module **/
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { patch } from "@web/core/utils/patch";
patch(ControlButtons.prototype, {
    async VitouPOSPrintSlip() {
        this.dialog.add(AlertDialog, {
            title: _t("Print Slip for Kitchen"),
            body: _t("You can print this slip for kitchen or customer"),
        });
    },
});