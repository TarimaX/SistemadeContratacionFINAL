import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Requisito</TableCell>
            <TableCell>Títulos</TableCell>
            <TableCell>Detalle de Tiempo</TableCell>
            <TableCell>Mínimo</TableCell>
            <TableCell>Máximo</TableCell>
            <TableCell>Observaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{minWidth:300}}>{row.requisito}</TableCell>

              <TableCell style={{minWidth:300}}>
                {row.titulos.map((titulo, i) => (
                  <TableRow key={index}>
                    <TableCell>{titulo}</TableCell>
                  </TableRow>
                ))}
              </TableCell>

              <TableCell style={{minWidth:300}}>
                {row.detalleTiempo.length > 1 ? (
                  <>
                    {row.detalleTiempo.map((minimo, i) => (
                      <TableRow key={index}>
                        <TableCell>{minimo}</TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  row.detalleTiempo[0]
                )}
              </TableCell>

              <TableCell>
                {row.minimo.length > 1 ? (
                  <>
                    {row.minimo.map((minimo, i) => (
                      <TableRow key={index}>
                        <TableCell>{minimo}</TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  row.minimo[0]
                )}
              </TableCell>

              <TableCell>
                {row.maximo.length > 1 ? (
                  <>
                    {row.maximo.map((max, i) => (
                      <TableRow key={index}>
                        <TableCell>{max}</TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  row.maximo[0]
                )}
              </TableCell>

              <TableCell style={{minWidth:250}}>
                <>
                  {row.observaciones.map((titulo, i) => (
                    <TableRow key={index}>
                      <TableCell>{titulo}</TableCell>
                    </TableRow>
                  ))}
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
