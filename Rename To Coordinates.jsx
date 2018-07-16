with (app.activeDocument)
{
    if (pathItems.length > 0)
    {
        for (var g = 0 ; g < pathItems.length; g++)
          {
              var item = pathItems[g];
               
              var pos = app.activeDocument.convertCoordinate (item.position, CoordinateSystem.DOCUMENTCOORDINATESYSTEM, CoordinateSystem.ARTBOARDCOORDINATESYSTEM);
              pos[0] += item.width * 0.5;
              pos[1] = Math.abs(pos[1] - (item.height * 0.5));

              item.name = "x" + pos[0] + "y" + pos[1] + ".svg";
          }
      }
}