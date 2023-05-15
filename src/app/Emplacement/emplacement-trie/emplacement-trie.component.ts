import { Component, OnInit } from "@angular/core";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-emplacement-trie",
  templateUrl: "./emplacement-trie.component.html",
  styleUrls: ["./emplacement-trie.component.scss"],
})
export class EmplacementTrieComponent implements OnInit {
  listeTrie: any;
  constructor(private emplacService: EmplacementService) {}

  ngOnInit(): void {
    this.trieListEmplacement();
  }
  trieListEmplacement() {
    this.emplacService
      .trierEmplacement()
      .subscribe((data) => (this.listeTrie = data));
  }
}
