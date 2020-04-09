<?php
  $data = array();
  if ($handle = opendir('./meme')) {
    while (false !== ($entry = readdir($handle))) {
      if ($entry != "." && $entry != "..") {
        $data[] = array(
          "filename" => $entry,
        );
      }
    }
    header('Content-Type: application/json');
    echo json_encode($data);
    closedir($handle);
  }
?>