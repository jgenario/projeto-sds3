const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Jose</td>
                        <td>7</td>
                        <td>25</td>
                        <td>1017.00</td>
                    </tr>
                    <tr>
                        <td>10/04/2021</td>
                        <td>Genario</td>
                        <td>10</td>
                        <td>25</td>
                        <td>18017.00</td>
                    </tr>
                    <tr>
                        <td>05/04/2021</td>
                        <td>Nunes</td>
                        <td>15</td>
                        <td>17</td>
                        <td>15517.00</td>
                    </tr>
                    <tr>
                        <td>10/04/2021</td>
                        <td>Silva</td>
                        <td>15</td>
                        <td>32</td>
                        <td>15317.00</td>
                    </tr>
                    <tr>
                        <td>08/04/2021</td>
                        <td>Julia</td>
                        <td>48</td>
                        <td>15</td>
                        <td>14017.00</td>
                    </tr>
                    <tr>
                        <td>04/04/2021</td>
                        <td>Gracyellan</td>
                        <td>20</td>
                        <td>12</td>
                        <td>15027.00</td>
                    </tr>
                    <tr>
                        <td>02/04/2021</td>
                        <td>Marcilio</td>
                        <td>20</td>
                        <td>45</td>
                        <td>1717.00</td>
                    </tr>
                    <tr>
                        <td>20/04/2021</td>
                        <td>Fernandes</td>
                        <td>16</td>
                        <td>7</td>
                        <td>1407.00</td>
                    </tr>
                    <tr>
                        <td>08/05/2021</td>
                        <td>Neto</td>
                        <td>8</td>
                        <td>25</td>
                        <td>1017.00</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default DataTable;