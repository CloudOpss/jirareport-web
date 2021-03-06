import React from "react";
import * as PropTypes from "prop-types";
import { Table } from "components/ui";

const ChangelogTable = ({ changelog }) =>
    <Table data={changelog}
           rows={[
               {
                   label: "Coluna",
                   value: "to"
               },
               {
                   label: "Início",
                   value: "startDate"
               },
               {
                   label: "Fim",
                   value: "endDate"
               },
               {
                   label: "Lead Time",
                   value: "leadTime"
               }
           ]}
           emptyMessage="Nenhuma informação encontrada."/>;

ChangelogTable.propTypes = {
    changelog: PropTypes.array
};

export default ChangelogTable;
