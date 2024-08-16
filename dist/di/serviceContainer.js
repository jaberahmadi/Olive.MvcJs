define(["require", "exports", "./serviceDescription"], function (require, exports, serviceDescription_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceContainer = void 0;
    class ServiceContainer {
        constructor() {
            this.services = new Array();
        }
        tryAddSingleton(key, factory, serviceOut) {
            return this.try(key, serviceOut, () => this.addSingleton(key, factory));
        }
        tryAddTransient(key, factory, serviceOut) {
            return this.try(key, serviceOut, () => this.addTransient(key, factory));
        }
        addSingleton(key, factory) {
            return this.add(key, true, factory);
        }
        ;
        addTransient(key, factory) {
            return this.add(key, false, factory);
        }
        getService(key) {
            const service = this.services.filter(x => x.key === key)[0];
            if (!!service)
                return service.getInstance();
            else
                throw new Error(`No service registered for '${key}'.`);
        }
        try(key, serviceOut, action) {
            if (this.services.some(s => s.key === key)) {
                serviceOut.value = this.services.filter(x => x.key === key)[0];
                return false;
            }
            serviceOut.value = action();
            return true;
        }
        add(key, singleton, factory) {
            if (this.services.some(s => s.key === key))
                throw new Error(`A service with the same key (${key}) is already added`);
            var result = new serviceDescription_1.ServiceDescription(key, singleton, this);
            result.setFactory(factory);
            this.services.push(result);
            return result;
        }
    }
    exports.ServiceContainer = ServiceContainer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZUNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaS9zZXJ2aWNlQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxNQUFhLGdCQUFnQjtRQUE3QjtZQUNZLGFBQVEsR0FBOEIsSUFBSSxLQUFLLEVBQXNCLENBQUM7UUErQ2xGLENBQUM7UUE3Q1UsZUFBZSxDQUFDLEdBQVcsRUFBRSxPQUEwQyxFQUFFLFVBQXlDO1lBQ3JILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVNLGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBMEMsRUFBRSxVQUF5QztZQUNySCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFFTSxZQUFZLENBQUMsR0FBVyxFQUFFLE9BQTBDO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFBQSxDQUFDO1FBRUssWUFBWSxDQUFDLEdBQVcsRUFBRSxPQUEwQztZQUN2RSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRU0sVUFBVSxDQUFxQixHQUFXO1lBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RCxJQUFJLENBQUMsQ0FBQyxPQUFPO2dCQUNULE9BQVUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDOztnQkFFaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRU8sR0FBRyxDQUFDLEdBQVcsRUFBRSxVQUF5QyxFQUFFLE1BQWdDO1lBQ2hHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxVQUFVLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTyxHQUFHLENBQUMsR0FBVyxFQUFFLFNBQWtCLEVBQUUsT0FBMEM7WUFDbkYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO2dCQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxHQUFHLG9CQUFvQixDQUFDLENBQUM7WUFFN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0IsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUNKO0lBaERELDRDQWdEQyJ9