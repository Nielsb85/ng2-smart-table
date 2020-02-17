import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
var CompleterEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterEditorComponent, _super);
    function CompleterEditorComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerStr = '';
        return _this;
    }
    CompleterEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CompleterEditorComponent.ctorParameters = function () { return [
        { type: CompleterService }
    ]; };
    CompleterEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [CompleterService])
    ], CompleterEditorComponent);
    return CompleterEditorComponent;
}(DefaultEditor));
export { CompleterEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBY2pEO0lBQThDLG9EQUFhO0lBSXpELGtDQUFvQixnQkFBa0M7UUFBdEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsa0JBQVksR0FBVyxFQUFFLENBQUM7O0lBSTFCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3JGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLEtBQW9CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFmcUMsZ0JBQWdCOztJQUozQyx3QkFBd0I7UUFacEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsNGdCQVFQO1NBQ0osQ0FBQztpREFLc0MsZ0JBQWdCO09BSjNDLHdCQUF3QixDQW9CcEM7SUFBRCwrQkFBQztDQUFBLEFBcEJELENBQThDLGFBQWEsR0FvQjFEO1NBcEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJjb21wbGV0ZXJTdHJcIlxuICAgICAgICAgICAgICAgICAgIFtkYXRhU2VydmljZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgW21pblNlYXJjaExlbmd0aF09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5taW5TZWFyY2hMZW5ndGggfHwgMFwiXG4gICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLnBhdXNlIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXG4gICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cIm9uRWRpdGVkQ29tcGxldGVyKCRldmVudClcIj5cbiAgICA8L25nMi1jb21wbGV0ZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29tcGxldGVyU3RyOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlID09PSAnY29tcGxldGVyJykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlcjtcbiAgICAgIGNvbmZpZy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5sb2NhbChjb25maWcuZGF0YSwgY29uZmlnLnNlYXJjaEZpZWxkcywgY29uZmlnLnRpdGxlRmllbGQpO1xuICAgICAgY29uZmlnLmRhdGFTZXJ2aWNlLmRlc2NyaXB0aW9uRmllbGQoY29uZmlnLmRlc2NyaXB0aW9uRmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIG9uRWRpdGVkQ29tcGxldGVyKGV2ZW50OiB7IHRpdGxlOiAnJyB9KTogYm9vbGVhbiB7XG4gICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gZXZlbnQudGl0bGU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=